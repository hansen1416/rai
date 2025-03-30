import * as THREE from "three";
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';

export function loadFbx(url: string,
    name: string = "",
    position: THREE.Vector3 | undefined = undefined,
    rotation: THREE.Euler | undefined = undefined): Promise<THREE.Group> {
    // Lazy-load FBXLoader to avoid errors if it's not imported
    // const { FBXLoader } = require("three/examples/jsm/loaders/FBXLoader");
    const fbxLoader = new FBXLoader();

    return new Promise((resolve, reject) => {
        fbxLoader.load(
            url,
            (object: THREE.Group) => {

                object.name = name

                if (position) {
                    object.position.copy(position)
                }

                if (rotation) {
                    object.rotation.copy(rotation)
                }

                resolve(object)
            },
            (xhr: ProgressEvent<EventTarget>) => {
                console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
            },
            (error) => {
                console.error(error);
                reject(error)
            }
        );
    });
}

export function loadJSON(url: string): Promise<any> {
    return new Promise((resolve) => {
        fetch(url).then((response) => resolve(response.json()));
    });
}


export function play_action(
    action: THREE.AnimationAction,
    mode: THREE.AnimationActionLoopStyles = THREE.LoopRepeat,
    repetitions: number = Infinity,
) {
    action.reset();

    // Default is THREE.LoopRepeat (with an infinite number of repetitions)
    action.setLoop(mode, repetitions);

    // keep model at the position where it stops
    action.clampWhenFinished = true;

    action.enabled = true;

    action.fadeIn(0.3);

    action.play();
}