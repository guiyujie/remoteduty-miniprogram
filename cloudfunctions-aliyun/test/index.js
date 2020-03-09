'use strict';
var fly=require("flyio");

exports.main = async (event, context) => {
  let res  = await fly.get("https://svc.eleduck.com/api/v1/posts?category=5&tags[]=0&tags[]=0&tags[]=19&page=1")
  return res
};
