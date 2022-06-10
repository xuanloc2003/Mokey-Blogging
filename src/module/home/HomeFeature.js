import {
  collection,
  limit,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Heading from "../../components/layout/Heading";
import { LoadingSkeleton } from "../../components/loading";
import { db } from "../../firebase-app/firebase-config";
import PostFeatureItem from "../posts/PostFeatureItem";
const HomeFeatureStyles = styled.div``;

const HomeFeature = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const colRef = collection(db, "posts");
    const queries = query(
      colRef,
      where("status", "==", "1"),
      where("hot", "==", true),
      limit(6)
    );
    onSnapshot(queries, (snapshot) => {
      const results = [];
      snapshot.docs.forEach((doc) => {
        results.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setPosts(results);
    });
  }, []);
  // if (posts.length <= 0) return null;
  return (
    <HomeFeatureStyles className="home-block">
      <div className="container">
        <Heading>Bài Viết Nổi Bật</Heading>
        <div className="grid-layout">
          {posts.length > 0 ? (
            posts.map((post) => (
              <PostFeatureItem key={post.id} data={post}></PostFeatureItem>
            ))
          ) : (
            <>
              <PostFeatureLoading></PostFeatureLoading>
              <PostFeatureLoading></PostFeatureLoading>
              <PostFeatureLoading></PostFeatureLoading>
            </>
          )}
        </div>
      </div>
    </HomeFeatureStyles>
  );
};
const PostFeatureLoading = () => {
  return (
    <div className="relative w-full bg-white h-[200px] rounded-2xl border-black border">
      <div className="absolute inset-0 p-5">
        <div className="flex items-center justify-between mb-4 ">
          <LoadingSkeleton className="w-[50px] h-[20px] rounded-xl"></LoadingSkeleton>
          <LoadingSkeleton className="w-[70px] h-[20px] rounded-xl"></LoadingSkeleton>
          <LoadingSkeleton className="w-[90px] h-[20px] rounded-xl"></LoadingSkeleton>
        </div>
        <div className="mb-4">
          <LoadingSkeleton className="w-[300px] h-[30px] rounded-lg"></LoadingSkeleton>
        </div>
        <div >
          <LoadingSkeleton className="w-full rounded-lg h-[80px]"></LoadingSkeleton>
        </div>
      </div>
    </div>
  );
};

export default HomeFeature;
