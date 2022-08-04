export const returnStrategy = async () => {
    const response = await fetch(
      'https://arcane-hollows-12884.herokuapp.com/https://serene-depths-85876.herokuapp.com/v1'
    );
    if (!response.ok) {
      throw new Error(response.status);
    } else {
      return await response.json();
    }
  };