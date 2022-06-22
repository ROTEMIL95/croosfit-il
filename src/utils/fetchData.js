export const exerciseOptions = {

    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
        'X-RapidAPI-Key': process.env.React_App_Rapid_API_KEY,
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};


export const youtubeOptions = {
    method: 'GET',

    headers: {
        'X-RapidAPI-Key': process.env.React_App_Rapid_API_KEY,
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
};

export const fetchData = async (url, options) => {

    const res = await fetch(url, options);
    const data = res.json();

    return data;
}