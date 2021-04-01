import React, { useEffect, useState } from 'react';

const MealFinder = () => {
    const [search,setSearch] = useState([]);
    const [find,setFind] = useState([]);
    // get data meal api
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setFind(data?.meals))
    },[search]);

    // input fild get data
    const handelChange = event => {
        setSearch(event.target.value);
    }

    return (
        <div>
            <h3>Meal finder</h3>
            <input type="text" onChange={handelChange} placeholder="Search Footer" />
            <p>Search Value : {search}</p>
            <p>get search value : {find?.length || 0}</p>
            <ul>
                {
                    find?.map(fd => <li>{fd?.strMeal || ''}</li>)
                }
            </ul>
        </div>
    );
};

export default MealFinder;