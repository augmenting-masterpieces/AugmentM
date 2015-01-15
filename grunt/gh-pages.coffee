module.exports =
	deploy:
	  options:
	    base: 'dist'
	    branch: 'master'
	    repo: 'git@github.com:augmenting-masterpieces/augmenting-masterpieces.github.io.git'
	  src: '**'
	beta:
	  options:
	    base: 'dist'
	    branch: 'gh-pages'
	  src: '**'