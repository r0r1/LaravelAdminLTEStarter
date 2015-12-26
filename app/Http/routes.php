<?php

Route::group(['middleware' => ['web']], function () {
    Route::auth();
    Route::group(['middleware' => 'auth'], function(){
      Route::get('/dashboard', 'DashboardController@index');
      Route::get('/', 'DashboardController@index');
    });
});
