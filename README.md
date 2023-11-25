# Zayssystem
write a express or dns server in 3 line!

## Install here
```
  npm i zayssystem
  
```
or go to current release

# How to use (Express/Dns - 32x)
```
const {Interface32x} = require('zayssystem');
const interface32x = new Interface32x();
const interface_express32x = new interface32x.ExpressServer(port, {name: string});
```
```
const {Interface32x} = require('zayssystem');
const interface32x = new Interface32x();
const interface_dns_server32x = new interface32x.dns_server();
```

# How to use (Express/Sqlite - 64x)
```
const {Interface64x} = require('zayssystem');
const interface64x = new Interface64x();
const interface_express64x = new interface64x.CreateExpress({
    Name: string,
    Admin: {},
    Port: number
})
```
```
const {Interface64x} = require('zayssystem');
const interface64x = new Interface64x();
const interface_sqlite3_64x = new interface64x.CreateDB({dbloc: string, dbname: strimg});
interface_sqlite3_64x.Create({
    tablename:  string,
    args: {
        args1:  string,
        args2:  string,
        args3:  string
    }
})
interface_sqlite3_64x.UploadData({
    tablename: string,
    table: {
        arg1:  string,
        arg2:  string,
        arg3:  string
    },
    Upload: {
        data1:  string,
        data2:  string,
        data3:  string
    }
})
interface_sqlite3_64x.GrabData({
    tablename: "Test",
    table: {
        arg1: string,
        arg2:  string,
        arg3: string
    }
})
```

# Version 1.0.8
- Added new "Interface.CreateDB" class

# Version 1.0.3
- Added new "Interface" class
- Removed "client" folder
- Added "sqlite3"

# Version 1.0.1
- Fixed unable to use "interface" class (npm patch)
- Added to github
