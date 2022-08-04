export const returnStrategy = async () => {
    const response = await fetch(
        'http://localhost:8080/v1'
    );
    if (!response.ok) {
      throw new Error(response.status);
    } else {
      return await response.json();
    }
  };