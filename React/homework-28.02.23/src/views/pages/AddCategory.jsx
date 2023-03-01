import { useForm, Controller} from "react-hook-form";
import {TextField } from "@mui/material";
import axios from "axios";


const AddCategory = () => {    

  const { control, handleSubmit } = useForm({
    defaultValues:{
      id: null,
      name: "",
      description:""
    }});
  
  const onSubmit = (data) => {
    const newCategory = {
        id: Number(data.id),
        description: data.description,
        name: data.name,
    }
    axios.post("https://northwind.vercel.app/api/categories", newCategory)
    .then((res) => console.log("Post success!"));
  };

  return (<>
  <h1>Add Category</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div style={{marginTop: 10}}>
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
      </div ><div style={{marginTop: 10}}>
      <Controller
        name="name"
        control={control}
        render={({ field }) => <TextField label="Category Name" sx={{width: 350}}{...field} />}
      />
      </div><div style={{marginTop: 10}}>
      <Controller
        name="description"
        control={control}
        render={({ field }) => <TextField label="Description" sx={{width: 350}}{...field} />}
      />
      </div>
      <input type="submit" style={{marginTop: 10}} />
    </form>
    </>
  );
};

export default AddCategory