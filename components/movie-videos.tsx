import { API_URL } from "../app/(home)/page";

async function getVideos(id: string){
    console.log(`fetching videos: ${Date.now()}`);

    await new Promise((resolve) => setTimeout(resolve,2000));
    const response = await fetch(`${API_URL}/${id}/videos`);
    return response.json();
    //throw new Error('something broke');
}

export default async function MovieVidoes({id}: {id:string}){
    const videos = await getVideos(id);
    return <h6>{JSON.stringify(videos)}</h6>
}