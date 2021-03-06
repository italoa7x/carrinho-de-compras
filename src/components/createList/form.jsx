import React from "react";

import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { InputAdornment } from "@material-ui/core";
import Button from "@material-ui/core/Button";

import "./styles.css";

const units = ["kg", "lt", "un"];

const form = () => (
  <div className="page-container">
    <form className="form-container">
      <div className="form-row">
        <TextField
          label="Lista"
          name="list"
          value={""}
          onChange={() => {}}
          required
        />
        <Button variant="outlined" color="secondary">
          Adicionar
        </Button>
      </div>
      <div className="form-row">
        <TextField
          label="Produto"
          name="product"
          value={""}
          onChange={() => {}}
          required
        />

        <TextField
          label="Quantidade"
          name="quantity"
          value={""}
          onChange={() => {}}
          required
        />
        <TextField
          select
          label="Unidade"
          name="unity"
          value={""}
          onChange={() => {}}
          required
        >
          {units.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          label="Preço"
          name="price"
          value={""}
          onChange={() => {}}
          inputProps={{
            startAdornment: (
              <InputAdornment position="start">R$</InputAdornment>
            ),
          }}
        />
      </div>
    </form>
  </div>
);

export default form;
