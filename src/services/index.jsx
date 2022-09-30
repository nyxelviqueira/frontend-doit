//Llamadas de Usuarios

export const registerUserService = async ({ username, email, password }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/register`, {
    method: "POST",
    body: JSON.stringify({ username, email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
};

export const logInUserService = async ({ email, password }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/login`, {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const getMyUserDataService = async (token) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/users`, {
    headers: {
      Authorization: token,
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const getUserDataService = async (id) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/users/${id}`);

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const editUserService = async ({ data, token }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/users`, {
    method: "PUT",
    body: data,
    headers: {
      Authorization: token,
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data;
};

//Llamadas de servicios

export const sendNewService = async ({ data, token }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/newservice`, {
    method: "POST",
    body: data,
    headers: {
      Authorization: token,
    },
  });
  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data;
};

export const getSingleService = async (id) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/services/${id}`
  );

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const getAllServicesService = async () => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/services`);

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

// Esto es para editar el Servicio
export const editModifyService = async ({ id, data, token }) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/services/${id}`,
    {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        Authorization: token,
        "Content-type": "application/json",
      },
    }
  );

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
  console.log(">>>>>>>>>>>>>>>data back", data);
  return json.data;
};

//Llamadas de replies

export const sendRepliesService = async ({ id, reply, token }) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/services/${id}`,
    {
      method: "POST",
      body: reply,
      headers: {
        Authorization: token,
      },
    }
  );
  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data;
};

export const getRepliesServiceService = async (id) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/replies/${id}`
  );

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data;
};
