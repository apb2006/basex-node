﻿/*
 * This example shows how new documents can be added.
 *
 */
var basex = require("../index");
var log = require("../debug");
var fs = require("fs");

// create session
var client = new basex.Session("localhost", 1984, "admin", "admin");
basex.debug_mode = false;
// create new database
 client.execute("create db test_db", log.print);
 var s=fs.createReadStream(__dirname+ "\\books.xml");

// add document
client.add("/world/World.xml", s, log.print);

// drop database
client.execute("drop db test_db", log.print);

// close session
client.close();