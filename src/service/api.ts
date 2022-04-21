import axios from "axios";
import DataSetList from "../models/DataSetList";

const getDataFromServer = (section : string) => {

    let url =  `http://localhost:3001/${section}`;

        return axios.get<DataSetList[]>(url)
        .then(response => response.data)
}

const addToFavourites = (movieData: Omit<DataSetList, "id">) => {
    return axios.post<DataSetList>(`http://localhost:3001/favourite`, movieData, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.data)
}

const removeFromFavourites = (id : string | number) => {
    return axios.delete<DataSetList>(`http://localhost:3001/favourite/${id}`, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.data)
}

export { getDataFromServer, addToFavourites, removeFromFavourites };