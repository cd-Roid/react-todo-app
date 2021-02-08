 const fetchData =  async () => { 
    const res = await fetch('http://localhost:3001');
    const data = await res.json();
    return data;
}

export default fetchData;