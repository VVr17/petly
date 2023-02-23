import React from "react";
import { Label, Input, Button } from "./UserDataItem.styled";
import { Pencil } from "./UserDataItem.styled";

export const UserDataItem = () => {
  return( <>
  <Label>Name:
    <Input name="name" type="name"/>
    <Button type="submit">
      <Pencil/>
    </Button>
  </Label>
  <Label>Email:
    <Input name="email" type="email"/>
    <Button type="submit">
      <Pencil/>
    </Button>
  </Label>
  <Label>Birthday:
    <Input name="birthday" type="birthday"/>
    <Button type="submit">
      <Pencil/>
    </Button>
  </Label>
  <Label>Phone:
    <Input name="phone" type="phone"/>
    <Button type="submit">
      <Pencil/>
    </Button>
  </Label>
  <Label>City:
    <Input name="city" type="city"/>
    <Button type="submit">
      <Pencil/>
    </Button>
  </Label> 
</>  
  )}