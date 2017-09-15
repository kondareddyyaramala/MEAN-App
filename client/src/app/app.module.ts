import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule, ApplicationRef } from '@angular/core';
import { RouterModule } from '@angular/router';


// Store
import { StoreModule } from '@ngrx/store';
import { RouterStoreModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


// Components Module
// import { ComponentsModule } from 'app/components';

// Bootstrapped App Component
import { AppContainer } from './containers/app';

// Container Modules
import { LoginModule } from './containers/login';
import { NewsLandingPageModule } from './containers/news-landing-page';


// Services
import { NewsService } from './services';
const SERVICES = [ NewsService ];

// Routes, Guards, Resolves
import { routes } from './routes';
// import {} from './routes/guards';
const GUARDS = [];

// import {} from './routes/resolves';
const RESOLVES = [];

// Effects
import { EffectsModule } from '@ngrx/effects';
import { NewsEffects } from './effects';
const EFFECTS = [
  EffectsModule.run(NewsEffects)
];

// Reducers
import { reducer } from './reducers';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,

    // Router
    // TODO HTML 5 History - push state - make sure spring boot setup
    RouterModule.forRoot(routes, { useHash: true /*, preloadingStrategy: PreloadAllModules */ }),

    /**
     * Container Modules
     * Our router expects these modules to be loaded in order
     * to mount the root component associated with this content
     */
    LoginModule,
    NewsLandingPageModule,

    /**
     * StoreModule.provideStore is imported once in the root module, accepting a reducer
     * function or object map of reducer functions. If passed an object of
     * reducers, combineReducers will be run creating your application
     * meta-reducer. This returns all providers for an @ngrx/store
     * based application.
     */
    StoreModule.provideStore(reducer),

    /**
     * EffectsModule.run() sets up the effects class to be initialized
     * immediately when the application starts.
     *
     * See: https://github.com/ngrx/effects/blob/master/docs/api.md#run
     */
    ...EFFECTS,

    /**
     * @ngrx/router-store keeps router state up-to-date in the store and uses
     * the store as the single source of truth for the router's state.
     */
    RouterStoreModule.connectRouter(),

    /**
     * Store devtools instrument the store retaining past versions of state
     * and recalculating new states. This enables powerful time-travel
     * debugging.
     *
     * To use the debugger, install the Redux Devtools extension for either
     * Chrome or Firefox
     *
     * See: https://github.com/zalmoxisus/redux-devtools-extension
     */
    StoreDevtoolsModule.instrumentOnlyWithExtension(),

  ],

  // Expose the AppComponent to bootstrap into
  declarations: [
    AppContainer
  ],

  // Expose our Services and Providers into Angular's dependency injection
  providers: [
    SERVICES,
    GUARDS,
    RESOLVES,
  ],
  bootstrap: [
    AppContainer
  ]
})
export class AppModule {}
