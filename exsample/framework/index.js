const {ZaysFramework} = require('zayssystem')
/**
 * This is the inside framework you can install the framework by doing npm i zayssystemhelper
 * 
 */

/**
 * you can do new ZaysFramework.Client().on(ZaysFramework.eventsList.create, ()=>{});
 * 
 * or
 */

new ZaysFramework.Client().on('create', ()=>{});