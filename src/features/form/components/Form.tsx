"use client";
import React from "react";
import { Input } from "@/components/Input";
import { useComplexForm } from "../hooks";
import { FIELD_NAMES } from "../constants";
import { Typography } from "@/components/Typography";

export const Form = () => {
  const { register } = useComplexForm();
  return (
    <div>
      <Typography component="h4" >
        Process and Register Document Collections from a Processed Folder Dump
      </Typography>
      <Input
      register={register}
      name={FIELD_NAMES.CHUNK_DIRECTORY}
        
        label="Select File Directory to Chunk"
      />
      <Input
      register={register}
      name={FIELD_NAMES.GENERATED_ID}
      validationSchema={{ required: true }}
        type='flex'
        label="Generated ID"
      />
      <Input
       register={register}
       name={FIELD_NAMES.COLLECTION_NAME}
     
        type='flex'
        label="Collection Name"
      />
       <Input
        register={register}
        name={FIELD_NAMES.COLLECTION_TAGS}
        type='flex'
        label="Collection Tags"
      />
    </div>
  );
};
