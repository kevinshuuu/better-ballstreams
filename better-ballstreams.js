// ==UserScript==
// @name         Better Ballstreams
// @namespace    http://wyaeiga.com/
// @version      0.1
// @description  Transform the default Ballstreams view into a theater mode with the video blown up to the left and the chat full height on the right.
// @author       Kevin Shu
// @match        http://*.ballstreams.com/live-streams/*
// @require      https://code.jquery.com/jquery-git2.min.js
// ==/UserScript==

function addGlobalStyle(css) {
  var head, style;
  head = document.getElementsByTagName('head')[0];
  if (!head) { return; }
  style = document.createElement('style');
  style.type = 'text/css';
  style.innerHTML = css;
  head.appendChild(style);
}

$(function() {
  console.log('Better Ballstreams loaded...')
  var button_html = '<a href="#" class="button_noninput better-ballstreams-toggle"></a>'
  var iframe_padding = '<div id="iframe_padding" style="height: 50px; width: 100%; display: flex; flex: 0 1 50px;"></div>'

  addGlobalStyle('.better-ballstreams-player        { position: absolute !important; width: 80% !important; height: 100% !important; top: 0 !important; left: 0 !important; z-index: 99999999 !important; }')
  addGlobalStyle('.better-ballstreams-chat          { position: absolute !important; width: 20% !important; height: 100% !important; bottom: 0 !important; right: 0 !important; z-index: 99999998 !important; background-color: #000; padding-top: 50px !important; display: flex; flex-flow: column; }')
  addGlobalStyle('.better-ballstreams-chat-iframe   { width: 100% !important; margin-left: auto; margin-right: auto; display: flex; flex: 1 1 auto; }')
  addGlobalStyle('.better-ballstreams-hr            { height: 0px !important; }')
  addGlobalStyle('.hide-scrollbar                   { overflow: hidden !important; }')
  addGlobalStyle('.better-ballstreams-toggle-close  { position: absolute !important; top: 0 !important; right: 0 !important; z-index: 999999999 !important; width: 20% !important; padding: 12px 0 !important; font-size: 26px !important; margin-top: 0 !important; }')
  addGlobalStyle('.better-ballstreams-toggle-close::before  { content: "Normal Ballstreams" !important; }')
  addGlobalStyle('.better-ballstreams-toggle::before  { content: "Better Ballstreams"; }')
  addGlobalStyle('.better-ballstreams-toggle        { line-height: 30px; margin: 0px; margin-top: 5px; float: left; border-radius: 0px; width: 130px; border: 0px; height: 30px; background: linear-gradient(to bottom, #4387FD 0%, #4683EA 100%); }')
  addGlobalStyle('.better-ballstreams-toggle:hover  { line-height: 30px; margin: 0px; margin-top: 5px; float: left; border-radius: 0px; width: 130px; border: 0px; height: 30px; background: linear-gradient(to bottom, #4387FD 0%, #4683EA 100%); color: #eee; box-shadow: 0 0 43px -7px #222 inset; transition: box-shadow 0.2s, color 0.2s; -webkit-transition: box-shadow 0.2s, color 0.2s; -moz-transition: box-shadow 0.2s, color 0.2s; -o-transition: box-shadow 0.2s, color 0.2s; }')
  addGlobalStyle('.better-ballstreams-display-none  { display: none; }')

  $(".button_noninput:contains('TrueLive')").first().before(button_html)
  $('#webchat').before(iframe_padding)
  $('#iframe_padding').toggle()

  $('.better-ballstreams-toggle').click(function(){
    $('#mediaplayer_wrapper').toggleClass('better-ballstreams-player')
    $('body').toggleClass('hide-scrollbar')
    $('.better-ballstreams-toggle').toggleClass('better-ballstreams-toggle-close')
    $('#playerBottom').toggleClass('better-ballstreams-chat')
    $('#playerBottom>hr').toggleClass('better-ballstreams-hr')
    $('#webchat').toggleClass('better-ballstreams-chat-iframe')
    $('#iframe_padding').toggle()
  });
});
