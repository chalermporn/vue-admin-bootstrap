
module.exports = function(grunt) {

  grunt.initConfig({
    pkg : grunt.file.readJSON('package.json'),
    less: {

        // ������
        compileCore : {
            options: {

              strictMath: true,
              // ��� sourceMap
              sourceMap: true,

              outputSourceFiles: true,

              // ��� sourceMap��ַ
              sourceMapURL: '<%= pkg.name %>.css.map',
              sourceMapFilename: 'dist/css/<%= pkg.name %>.css.map'
            },
            src: 'less/admin-bootstrap.less',
            dest: 'dist/css/<%= pkg.name %>.css'
        }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-less');

  // ���� less Ϊ css
  grunt.registerTask('less-compile', ['less:compileCore']);


  // Ĭ������
  grunt.registerTask('default',['less-compile']);
};
