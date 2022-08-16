async function sendRequest(id, prev = "") {
    const response = await fetch(
      `https://604b3120ee7cb900176a185c.mockapi.io/words/${id}`
    );
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    return prev + " " + jsonResponse.value;
  }
  
  async function getAll() {
    const response1 = await sendRequest(1);
    const response2 = await sendRequest(2, response1);
    const response3 = await sendRequest(3, response2);
    console.log("getAll :>>", response3);
  }
  
  getAll();