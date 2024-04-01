'use client';
import React, { useEffect, useState } from 'react'
import {getBuiltGraphSDK, GetApesQueryVariables } from "../utils/graphql/.graphclient"

import Cards from './cards';

  
interface ApeAttribute {
  trait_type: string;
  value: string;
}

interface ApeContent {
  image: string;
  attributes: ApeAttribute[];
}

interface ApesInterface {
  id: string;
  image: string;
  title: string;
  details: string;
  date: string;
}
  
function formatApes(apes: any[]): ApesInterface[] {
  return apes.map(ape => {

    const content: ApeContent = JSON.parse(ape.apeContent.content);
    

    const imageUrl = content.image.replace('ipfs://', 'https://ipfs.io/ipfs/');
    
    console.log(imageUrl);

    const details = content.attributes.map(attr => `${attr.trait_type}: ${attr.value}`).join(', ');
    

    const date = new Date(parseInt(ape.lastTrasnfer) * 1000).toLocaleDateString("en-US");

    return {
      id: ape.tokenId,
      image: imageUrl,
      title: ape.tokenId,
      details: details,
      date: date
    };
  });
}
  
  

const Apes: React.FC = () => {
  const [apes, setApes] = useState<ApesInterface[]>([]);
  const [maxPage, setMaxPage] = useState<number>(0);
  const { GetApes } = getBuiltGraphSDK();

  useEffect(() => {
    const fetchData = async () => {
      const variables: GetApesQueryVariables = { skip: 0};
      const response = await GetApes(variables);
      const formated = formatApes(response.apes);
      setApes(formated);
    };
    fetchData();

  }, []);




  return (
    <div className='h-screen w-screen' >
        <h1 className=' pl-10 pt-10 text-9xl bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-blue-200'>Apes List</h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 w-screen">
            <Cards items={apes} />
        </div>
    </div>
  );
};

export default Apes;
