import classes from "./App.module.scss";
import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from './components/Home/Home';
import AuthView from "./views/AuthView/AuthView";
import NotFoundView from "./views/NotFoundView/NotFoundView";

function App() {
  return (
    <div className={classes["App"]}>
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="auth/*" element={<AuthView />} />
          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
