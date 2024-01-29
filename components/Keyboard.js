'use client'

import React, { useEffect } from 'react'
import { Application } from '@splinetool/runtime';

function Block01() {

  useEffect(() => {
    const canvas = document.getElementById('canvas3d');
    const app = new Application(canvas);
    app.load('https://prod.spline.design/3DqELONma7LpaDeI/scene.splinecode');
  }, []);

  return (
    <>
      <canvas id="canvas3d"></canvas>
    </>
  )
}

export default Block01