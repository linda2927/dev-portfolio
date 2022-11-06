import classes from './Study.module.css';
import Title from '../UI/Title';
import React, { useEffect, useState } from 'react';
import * as d3 from 'd3';
import './bubbleChart.css';
import { studyData } from '../../data';
import Banner from '../UI/Banner';

const study = (props, ref) => {
    let svg = null;
    let bubbles = null;
    let labels = null;
    let nodes = [];

    function charge(d) {
        return Math.pow(d.radius, 2.0) * 0.01;
    }

    const createSimulation = (width, height, forceStrength = 0.03) => {
        const centre = { x: width / 2, y: height / 2 };

        // create a force simulation and add forces to it
        const simulation = d3
            .forceSimulation()
            .force('charge', d3.forceManyBody().strength(charge))
            // .force('center', d3.forceCenter(centre.x, centre.y))
            .force('x', d3.forceX().strength(forceStrength).x(centre.x))
            .force('y', d3.forceY().strength(forceStrength).y(centre.y))
            .force(
                'collision',
                d3.forceCollide().radius((d) => d.radius + 1)
            );

        // force simulation starts up automatically, which we don't want as there aren't any nodes yet
        simulation.stop();
        return simulation;
    };

    const fillColour = d3
        .scaleOrdinal()
        .domain(['1', '2', '3', '4', '5'])
        .range(['#6ba0ea', '#7fd2fb', '#a2eaff', '#cff2ff', '#3E6DD5']);

    function createNodes(rawData) {
        // use max size in the data as the max in the scale's domain
        // note we have to ensure that size is a number
        const maxSize = d3.max(rawData, (d) => d.size);

        // size bubbles based on area
        const radiusScale = d3.scaleSqrt().domain([0, maxSize]).range([0, 80]);

        // use map() to convert raw data into node data
        const myNodes = rawData.map((d) => ({
            ...d,
            radius: radiusScale(+d.size),
            size: +d.size,
            x: Math.random() * 900,
            y: Math.random() * 800,
        }));

        return myNodes;
    }

    function chart(selector, rawData, width, height, simulation) {
        // convert raw data into nodes data
        nodes = createNodes(rawData);

        // create svg element inside provided selector
        svg = d3
            .select(selector)
            .append('svg')
            .attr('class', 'chart-area')
            .attr('width', width)
            .attr('height', height);

        // bind nodes data to circle elements
        const elements = svg
            .selectAll('.bubble')
            .data(nodes, (d) => d.id)
            .enter()
            .append('g');

        bubbles = elements
            .append('circle')
            .classed('bubble', true)
            .attr('name', (d) => d.label)
            .attr('r', (d) => d.radius)
            .attr('fill', (d) => '#ffffff');

        // labels
        labels = elements
            .append('text')
            .attr('dy', '.3em')
            .style('text-anchor', 'middle')
            .style('font-size', '1rem')
            .style('font-weight', 600)
            .style('fill', '#ffffff')
            .text((d) => d.label);

        // set simulation's nodes to our newly created nodes array
        // simulation starts running automatically once nodes are set
        simulation.nodes(nodes).on('tick', ticked).restart();
        return nodes;
    }

    function ticked() {
        bubbles.attr('cx', (d) => d.x).attr('cy', (d) => d.y);

        labels.attr('x', (d) => d.x).attr('y', (d) => d.y);
    }

    useEffect(() => {
        console.log('fire');
        const height = 600;
        console.log(props.canvasWidth);
        const width = props.canvasWidth;
        // console.log();

        const simulation = createSimulation(width, height);
        const nodes = chart('#bubble', studyData, width, height, simulation);

        if (props.startSimulation) {
            d3.selectAll('.bubble').attr('fill', (d) => fillColour(d.groupId));
            d3.selectAll('text').style('fill', 'black');
            simulation.nodes(nodes).on('tick', ticked).restart();
        }

        return () => {
            d3.select('.chart-area').remove();
        };
    }, [props.startSimulation, props.canvasWidth]);

    return (
        <section
            className={classes.study}
            id={props.sectionId}
            ref={(el) => (ref.current[4] = el)}
        >
            <Title title={'Study'} className={classes.title} />
            <div id="bubble" style={{ textAlign: 'center' }}></div>
            <Banner
                title="Earthlyz9 Dev Notes 📒"
                body="나를 위해 꾸준히 기록합니다. 하나의 큰 도서관이 될 때까지!"
                url="https://earthlyz9-dev.oopy.io"
            />
        </section>
    );
};

const Study = React.forwardRef(study);

export default Study;
