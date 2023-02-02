import Head from "next/head";
import axios from "axios";

export default function Home({ videos }) {
  return <div className="text-3xl font-bold underline">Hello World!</div>;
}

export const getServerSideProps = async () => {
  const { data } = await axios.get("http://localhost:8080/api/post");
  return {
    props: {
      videos: data,
    },
  };
};
