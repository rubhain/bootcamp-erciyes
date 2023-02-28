import { useForm, Controller} from "react-hook-form";
import { useEffect, useState } from "react";
import {TextField } from "@mui/material";
import axios from "axios";
import Grid from "@mui/material";

const AddCategory = () => {    
  const { control, handleSubmit } = useForm({
    defaultValues:{
      id: null,
      name: "",
      description:""
    }});
  
  const onSubmit = (data) => {

    const newCategory = {
        id: data.id,
        description: data.description,
        name: data.name,
    }
    axios.post("https://northwind.vercel.app/api/categories", newCategory)
    .then((res) => console.log("Post success!"));
  };

  return (<>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
      <Controller
        name="id"
        control={control}
        render={({ field }) => <TextField
        label="Category Id"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        {...field} />}
      />
      </div><div>
      <Controller
        name="name"
        control={control}
        render={({ field }) => <TextField label="Category Name"  rows={2}{...field} />}
      />
      </div><div>
      <Controller
        name="description"
        control={control}
        render={({ field }) => <TextField label="Description"rows={8}{...field} />}
      />
      </div>
      <input type="submit" />
    </form>
    </>
  );
};

export default AddCategory