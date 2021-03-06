/** 
 * Copyright (c) 2012 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

(function() {
  var secretWordField = document.getElementById('secretword'),
      saveButton = document.getElementById('savebutton');

  chrome.storage.local.get('secretword', function(items) {
    if (typeof (items.secretword) == 'undefined')
      return;

    for (var index = 0; index < items.secretword.length; ++index)
      secretWordField.placeholder += '\u25CF';
  });

  saveButton.onclick = function() {
    var secretWord = secretWordField.value;
    if (secretWord.length == 0) {
      alert('Error: No value specified.');
      return;
    }

    chrome.storage.local.set({'secretword': secretWord}, function() {
      alert('Success: The secret word has been saved.');
    });
  };
})();
