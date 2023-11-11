
type Entry = {
  cve: string;
  msg: string;
  time: string;
  src_address: string;
};

type GetResponse = {
  data: Entry[];
};

async function getEntries() {
  try {
    // 👇️ const response: Response
    const response = await fetch('http://localhost:3000/api/users', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    // 👇️ const result: GetUsersResponse
    const result = await (response.json()) as GetResponse

    console.log('result is: ', JSON.stringify(result, null, 4));

    return result;

  } catch (error) {
    if (error instanceof Error) {
      console.log('error message: ', error.message);
      return error.message;
    } else {
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    }
  }
}

export { getEntries }
