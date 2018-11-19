<?php

namespace Uccello\WorkflowDesigner\Providers;

use Illuminate\Support\ServiceProvider;

/**
 * App Service Provider
 */
class AppServiceProvider extends ServiceProvider
{
  /**
   * Indicates if loading of the provider is deferred.
   *
   * @var bool
   */
  protected $defer = false;

  public function boot()
  {
    // Views
    $this->loadViewsFrom(__DIR__ . '/../../resources/views', 'workflow-designer');

    // Translations
    $this->loadTranslationsFrom(__DIR__ . '/../../resources/lang', 'workflow-designer');

    // Migrations
    $this->loadMigrationsFrom(__DIR__ . '/../../database/migrations');

    // Publish assets
    $this->publishes([
      __DIR__ . '/../../public' => public_path('vendor/uccello/workflow-designer'),
    ], 'assets'); // CSS
  }

  public function register()
  {

  }
}