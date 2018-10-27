/**
* Author: Lucas Bustamante
* Website: https://www.lucasbustamante.com.br
*/

// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

chrome.downloads.onDeterminingFilename.addListener(function(item, __suggest) {
  function suggest(filename, conflictAction) {
    __suggest({filename: filename,
               conflictAction: conflictAction,
               conflict_action: conflictAction});
    // conflict_action was renamed to conflictAction in
    // https://chromium.googlesource.com/chromium/src/+/f1d784d6938b8fe8e0d257e41b26341992c2552c
    // which was first picked up in branch 1580.
  }

  var d = new Date();
  var month = d.getMonth() + 1; // index starts at 0, so we have to add 1
  var year = d.getFullYear();

  suggest(year + '/' + month + '/' + item.filename, 'uniquify');
  return;
});
