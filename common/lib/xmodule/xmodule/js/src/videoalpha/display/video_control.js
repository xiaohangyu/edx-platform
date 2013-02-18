(function (requirejs, require, define) {

// VideoPlayer module.
define(
'videoalpha/display/video_control.js',
['videoalpha/display/bind.js'],
function (bind) {

    // VideoControl() function - what this module "exports".
    return function (state) {
        state.videoControl = {};

        // Functions which will be accessible via 'state' object.
        makeFunctionsPublic(state);

        // TODO.
        console.log('We are inside VideoControl() function.');

        renderElements(state);
        bindHandlers();
    };

    // Private functions start here.

    function makeFunctionsPublic(state) {
        state.videoControl.play           = bind(play, state);
        state.videoControl.pause          = bind(pause, state);
        state.videoControl.togglePlayback = bind(togglePlayback, state);
    }

    function renderElements(state) {
        var el;

        el = $(
            '<div class="slider"></div>' +
            '<div>' +
                '<ul class="vcr">' +
                    '<li><a class="video_control" href="#"></a></li>' +
                    '<li><div class="vidtime">0:00 / 0:00</div></li>' +
                '</ul>' +
                '<div class="secondary-controls">' +
                    '<a href="#" class="add-fullscreen" title="Fill browser">Fill Browser</a>' +
                '</div>' +
            '</div>'
        );

        state.videoControl.el = state.el.find('.video-controls');
        state.videoControl.el.append(el);

        state.videoControl.playPauseEl = state.videoControl.el.find('.video_control');

        if (!onTouchBasedDevice()) {
            state.videoControl.playPauseEl.addClass('play').html('Play');
        }
    }

    function bindHandlers(state) {
        state.videoControl.playPauseEl.click(state.videoControl.togglePlayback);
    }

    // Public functions start here.
    // These are available via the 'state' object. Their context ('this' keyword) is the 'state' object.
    // The magic private function that makes them available and sets up their context is makeFunctionsPublic().

    function play() {
        this.videoControl.playPauseEl.removeClass('play').addClass('pause').html('Pause');
        this.videoControl.state = 'playing';
    }

    function pause() {
        this.videoControl.playPauseEl.removeClass('pause').addClass('play').html('Play');
        this.videoControl.state = 'paused';
    }

    function togglePlayback(event) {

        event.preventDefault();

        console.log('We are in togglePlayback() function. this =');
        console.log(this);

        /*
        if (this.$('.video_control').hasClass('play')) {
            $(this).trigger('play');
        } else if (this.$('.video_control').hasClass('pause')) {
            $(this).trigger('pause');
        }
        */
    }

});

}(RequireJS.requirejs, RequireJS.require, RequireJS.define));


/*
// Generated by CoffeeScript 1.4.0
(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  this.VideoControlAlpha = (function(_super) {

    __extends(VideoControlAlpha, _super);

    function VideoControlAlpha() {
      this.togglePlayback = __bind(this.togglePlayback, this);
      return VideoControlAlpha.__super__.constructor.apply(this, arguments);
    }

    VideoControlAlpha.prototype.bind = function() {
      return this.$('.video_control').click(this.togglePlayback);
    };

    VideoControlAlpha.prototype.render = function() {
      this.el.append("<div class=\"slider\"></div>\n<div>\n  <ul class=\"vcr\">\n    <li><a class=\"video_control\" href=\"#\"></a></li>\n    <li>\n      <div class=\"vidtime\">0:00 / 0:00</div>\n    </li>\n  </ul>\n  <div class=\"secondary-controls\">\n    <a href=\"#\" class=\"add-fullscreen\" title=\"Fill browser\">Fill Browser</a>\n  </div>\n</div>");
      if (!onTouchBasedDevice()) {
        return this.$('.video_control').addClass('play').html('Play');
      }
    };

    VideoControlAlpha.prototype.play = function() {
      return this.$('.video_control').removeClass('play').addClass('pause').html('Pause');
    };

    VideoControlAlpha.prototype.pause = function() {
      return this.$('.video_control').removeClass('pause').addClass('play').html('Play');
    };

    VideoControlAlpha.prototype.togglePlayback = function(event) {
      event.preventDefault();
      if (this.$('.video_control').hasClass('play')) {
        return $(this).trigger('play');
      } else if (this.$('.video_control').hasClass('pause')) {
        return $(this).trigger('pause');
      }
    };

    return VideoControlAlpha;

  })(SubviewAlpha);

}).call(this);
*/