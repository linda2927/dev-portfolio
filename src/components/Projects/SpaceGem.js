import { Unity, useUnityContext } from 'react-unity-webgl';

const SpaceGem = () => {
    const { unityProvider } = useUnityContext({
        loaderUrl: 'SpaceGemWebGL/Build/SpaceGemWebGL.loader.js',
        dataUrl: 'SpaceGemWebGL/Build/SpaceGemWebGL.data',
        frameworkUrl: 'SpaceGemWebGL/Build/SpaceGemWebGL.framework.js',
        codeUrl: 'SpaceGemWebGL/Build/SpaceGemWebGL.wasm',
    });
    return (
        <div>
            <Unity unityProvider={unityProvider} />
        </div>
    );
};

export default SpaceGem;
