import { async } from 'regenerator-runtime';

export const getJSON = async function (url) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    // Bắt lỗi ID sai
    if (!res.ok) throw new Error(`${data.message} (${res.status} error 💥💥)`);
    return data;
  } catch (error) {
    console.error(error);
  }
};
