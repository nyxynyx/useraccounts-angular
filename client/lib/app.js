angular.module('myApp', ['angular-meteor', 'ui.router', 'accounts.ui', 'angularUtils.directives.dirPagination', 
	'angularMoment'])


function onReady() {
	angular.bootstrap(document, ['myApp'], {
		strictDi: true
	})
}

if(Meteor.isCordova)
	angular.element(document).on('deviceready', onReady)
else
	angular.element(document).ready(onReady)


moment.lang('en', {
    relativeTime : {
        future: "in %s",
        past:   "%s",
        s:  "seconds",
        m:  "1m",
        mm: "%dm",
        h:  "1h",
        hh: "%dh",
        d:  "1d",
        dd: "%dd",
        M:  "1m",
        MM: "%dm",
        y:  "1y",
        yy: "%dy"
    }
});