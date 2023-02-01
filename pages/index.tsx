import Head from "next/head";
import axios from "axios";

export default function Home() {
  return <div className="text-3xl font-bold underline">Hello World!</div>;
}

export const getServerSideProps = async () => {
  const response = await axios.get("http://localhost:8080/api/post");
  console.log(response.data.name);
  return {
    props: {},
  };
};
