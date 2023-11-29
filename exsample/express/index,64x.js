const {Interface64x} = require('zayssystem');
const interface64x = new Interface32x();
const express = new interface64x.ExpressServer(
    {
        Name: name,
        Admin: {},
        Port:  port
    }
);


