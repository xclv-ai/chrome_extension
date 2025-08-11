// Chrome Extension Popup Script - IIFE Wrapped for Compatibility
(function() {
  'use strict';

// Configuration is now loaded from centralized location
// The LLM_CONFIG and helper functions are loaded via script tag in popup.html

// Dynamic Brand Protection System
// Generates brand content via obfuscated JavaScript to prevent easy HTML modification
const BRAND_PROTECTION = {
  // Encrypted brand data (Base64 encoded to hide from casual inspection)
  data: {
    title: 'bjhuIGJveQ==', // 'n8n boy'
    subtitle: 'WW91ciBuOG4gaGVscGVyLg==', // 'Your n8n helper.'
    altText: 'bjhuIGJveQ==', // 'n8n boy'
    copyright: 'qSAyMDI1IEtlbiBLYWkuIEFsbCByaWdodHMgcmVzZXJ2ZWQu', // '© 2025 Ken Kai. All rights reserved.'
    author: 'S2VuIEthaQ==', // 'Ken Kai'
    website: 'aHR0cHM6Ly9rZW5rYWlzLmNvbQ==', // 'https://kenkais.com'
    community: 'aHR0cHM6Ly93d3cuc2tvb2wuY29tL2tlbmthaS9hYm91dA==', // 'https://www.skool.com/kenkai/about'
    pageTitle: 'bjhuIGJveQ==', // 'n8n boy'
  },

  // Decoy data to confuse reverse engineers
  decoy: {
    title: 'V29ya2Zsb3cgSGVscGVy', // 'Workflow Helper'
    subtitle: 'WW91ciBhdXRvbWF0aW9uIGFzc2lzdGFudA==', // 'Your automation assistant'
    author: 'RGV2ZWxvcGVy', // 'Developer'
  },

  // Apply brand content to DOM elements
  applyBranding() {
    try {
      setTimeout(() => this.executeBrandingOperations(), 200);
    } catch (error) {
      console.warn('Brand protection: Error applying branding', error);
      this.applyFallbackBranding();
    }
  },

  // Execute all branding operations in sequence
  executeBrandingOperations() {
    const operations = [
      () => this.setPageTitle(),
      () => this.setBrandTitle(),
      () => this.setBrandSubtitle(),
      () => this.setLogoAltText(),
      () => this.setAuthorLinks(),
      () => this.setCommunityLinks(),
    ];

    operations.forEach(operation => {
      try {
        operation();
      } catch (error) {
        console.warn('Brand protection: Error in operation', error);
      }
    });
  },

  setPageTitle() {
    document.title = atob(this.data.pageTitle);
  },

  setBrandTitle() {
    const titleElement = document.querySelector('.brand-title');
    if (titleElement) {
      titleElement.classList.add('n8n-boy-opacity-0');
      titleElement.textContent = atob(this.data.title);
      setTimeout(() => {
        titleElement.classList.add('n8n-boy-transition-opacity-0-3s-ease');
        titleElement.classList.add('n8n-boy-opacity-1');
      }, 50);
    }
  },

  setBrandSubtitle() {
    const subtitleElement = document.querySelector('.brand-subtitle');
    if (subtitleElement) {
      subtitleElement.classList.add('n8n-boy-opacity-0');
      subtitleElement.textContent = atob(this.data.subtitle);
      setTimeout(() => {
        subtitleElement.classList.add('n8n-boy-transition-opacity-0-3s-ease');
        subtitleElement.classList.add('n8n-boy-opacity-1');
      }, 100);
    }
  },

  setLogoAltText() {
    const logoElement = document.querySelector('.logo');
    if (logoElement) {
      logoElement.alt = atob(this.data.altText);
    }
  },

  setAuthorLinks() {
    const authorLinks = document.querySelectorAll('a[href*="kenkais"]');
    authorLinks.forEach((link, index) => {
      link.classList.add('n8n-boy-opacity-0');
      link.textContent = atob(this.data.author);
      link.href = atob(this.data.website);
      setTimeout(() => {
        link.classList.add('n8n-boy-transition-opacity-0-3s-ease');
        link.classList.add('n8n-boy-opacity-1');
      }, 250 + (index * 50));
    });
  },

  setCommunityLinks() {
    const communityLinks = document.querySelectorAll('a[href*="skool"]');
    communityLinks.forEach(link => {
      link.href = atob(this.data.community);
    });
  },

  // Fallback branding if decoding fails
  applyFallbackBranding() {
    this.setFallbackTitle();
    this.setFallbackSubtitle();
  },

  setFallbackTitle() {
    const titleElement = document.querySelector('.brand-title');
    if (titleElement && !titleElement.textContent.trim()) {
      titleElement.textContent = 'Extension';
    }
  },

  setFallbackSubtitle() {
    const subtitleElement = document.querySelector('.brand-subtitle');
    if (subtitleElement && !subtitleElement.textContent.trim()) {
      subtitleElement.textContent = 'Helper tool';
    }
  },

  // Initialize brand protection
  init() {
    // Apply branding immediately if DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        this.applyBranding();
      });
    } else {
      this.applyBranding();
    }
  },
};

// Animation utility functions
const animations = {
  // Smooth element entrance
  fadeInUp: (element, delay = 0) => {
    element.classList.add('n8n-boy-opacity-0');
    element.classList.add('n8n-boy-transform-translatey-20px');

    setTimeout(() => {
      element.classList.add('n8n-boy-transition-all-0-6s-cubic-bezier-0-175-0-885-0-32-1-275');
      element.classList.add('n8n-boy-opacity-1');
      element.classList.add('n8n-boy-transform-translatey-0');
    }, delay);
  },

  // Button loading state
  setLoading: (button, isLoading) => {
    if (isLoading) {
      button.classList.add('loading');
      button.disabled = true;
    } else {
      button.classList.remove('loading');
      button.disabled = false;
    }
  },

  // Ripple effect
  createRipple: (element, event) => {
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const _x = event.clientX - rect.left - size / 2;
    const _y = event.clientY - rect.top - size / 2;

    const ripple = document.createElement('div');
    ripple.classList.add('n8n-boy-css-text-position-absolute-border-radius-50-background-rgba-255-255-255-0-3-transform-scale-0-animation-ripple-0-6s-linear-left-x-px-top-y-px-width-size-px-height-size-px-pointer-events-none');

    element.classList.add('n8n-boy-position-relative');
    element.classList.add('n8n-boy-overflow-hidden');
    element.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
  },

  // Shake animation for errors
  shake: (element) => {
    element.classList.add('n8n-boy-animation-shake-0-5s-ease-in-out');
    setTimeout(() => {
      element.classList.add('n8n-boy-reset-animation');
    }, 500);
  },
};

// Add CSS for ripple animation
const style = document.createElement('style');
style.textContent = `
  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }

  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
    20%, 40%, 60%, 80% { transform: translateX(5px); }
  }
`;
document.head.appendChild(style);



// Enhanced form validation
class FormValidator {
  constructor() {
    this.rules = {};
  }

  addRule(fieldName, validator, errorMessage) {
    this.rules[fieldName] = { validator, errorMessage };
  }

  validate(formData) {
    const errors = [];

    for (const [fieldName, rule] of Object.entries(this.rules)) {
      const value = formData[fieldName];
      if (!rule.validator(value)) {
        errors.push({
          field: fieldName,
          message: rule.errorMessage,
        });
      }
    }

    return {
      isValid: errors.length === 0,
      errors,
    };
  }
}

// Chrome API Utilities
const chromeUtils = {
  isAvailable() {
    return typeof chrome !== 'undefined' && chrome.storage && chrome.storage.sync;
  },

  async get(keys) {
    if (!this.isAvailable()) {return {};}
    return new Promise((resolve) => {
      chrome.storage.sync.get(keys, (result) => {
        resolve(result);
      });
    });
  },

  async set(data) {
    if (!this.isAvailable()) {return false;}
    return new Promise((resolve) => {
      chrome.storage.sync.set(data, () => {
        resolve(!chrome.runtime.lastError);
      });
    });
  },

  sendMessage(message, callback) {
    if (!this.isAvailable() || !chrome.runtime) {
      return;
    }
    chrome.runtime.sendMessage(message, callback);
  },

  sendMessageToActiveTab(message) {
    if (!this.isAvailable() || !chrome.tabs) {
      return;
    }
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0]) {
        chrome.tabs.sendMessage(tabs[0].id, message, () => {
          // Silently handle errors - content script may not be loaded
        });
      }
    });
  },
};

// Storage Manager - handles all Chrome storage operations
class _StorageManager {
  async loadApiKey() {
    const result = await chromeUtils.get(['openrouterApiKey']);
    return result.openrouterApiKey || '';
  }

  async saveApiKey(apiKey, model) {
    return await chromeUtils.set({
      selectedModel: model,
      openrouterApiKey: apiKey,
    });
  }

  async loadSettings() {
    const result = await chromeUtils.get(['selectedModel', 'connectionTheme', 'fabChatTheme']);
    return {
      selectedModel: result.selectedModel || LLM_CONFIG.defaultModel,
      connectionTheme: result.connectionTheme || 'matrix',
      fabChatTheme: result.fabChatTheme || 'matrix',
    };
  }

  async saveModelSelection(model) {
    const modelConfig = LLM_CONFIG.models[model];
    const modelId = modelConfig ? modelConfig.id : model;
    return await chromeUtils.set({ selectedModel: modelId });
  }

  async saveTheme(theme, storageKey) {
    return await chromeUtils.set({ [storageKey]: theme });
  }

  refreshBackgroundCache() {
    chromeUtils.sendMessage({
      action: 'refreshApiKeyCache',
    }, (_response) => {
      if (chrome.runtime && chrome.runtime.lastError) {
        console.warn('Failed to refresh background cache:', chrome.runtime.lastError.message);
      }
    });
  }

  notifyModelIndicatorUpdate() {
    chromeUtils.sendMessageToActiveTab({
      action: 'updateModelIndicator',
    });
  }

  sendMessageToContentScript(message) {
    chromeUtils.sendMessageToActiveTab(message);
  }
}

// Theme Manager - handles theme switching and messaging
class _ThemeManager {
  constructor(storageManager) {
    this.storageManager = storageManager;
  }

  async handleThemeChange(theme) {
    const success = await this.storageManager.saveTheme(theme, 'connectionTheme');
    if (success) {
      this.storageManager.sendMessageToContentScript({
        action: 'updateConnectionTheme',
        theme: theme,
      });
    }
    return success;
  }

  async handleUIThemeChange(theme) {
    const success = await this.storageManager.saveTheme(theme, 'fabChatTheme');
    if (success) {
      this.storageManager.sendMessageToContentScript({
        action: 'updateUITheme',
        theme: theme,
      });
    }
    return success;
  }

  applyThemeSettings(settings, themeOptions, uiThemeOptions) {
    // Set the connection theme selection
    themeOptions.forEach(option => {
      if (option.value === settings.connectionTheme) {
        option.checked = true;
      }
    });

    // Set the UI theme selection
    uiThemeOptions.forEach(option => {
      if (option.value === settings.fabChatTheme) {
        option.checked = true;
      }
    });
  }
}

// Validation utilities
const validationUtils = {
  isValidApiKey(apiKey) {
    if (!apiKey || apiKey.trim() === '') {
      return false;
    }
    return apiKey.startsWith(LLM_CONFIG.keyPrefix) && apiKey.length >= LLM_CONFIG.keyMinLength;
  },

  async verifyApiKey(apiKey) {
    try {
      const response = await fetch('https://openrouter.ai/api/v1/key', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
      });
      return response.ok;
    } catch (error) {
      console.error('Error verifying API key:', error);
      return false;
    }
  },

  showValidationFeedback(element, isValid) {
    element.classList.remove('n8n-boy-border-color-var-error-500', 'n8n-boy-border-color-var-success-500', 'n8n-boy-reset-border');

    if (isValid === null) {
      element.classList.add('n8n-boy-reset-border');
    } else if (isValid) {
      element.classList.add('n8n-boy-border-color-var-success-500');
    } else {
      element.classList.add('n8n-boy-border-color-var-error-500');
    }
  },

  showTemporaryError(element, message) {
    const originalPlaceholder = element.placeholder;
    element.value = '';
    element.placeholder = message;
    element.classList.add('n8n-boy-border-color-var-error-500');

    setTimeout(() => {
      element.placeholder = originalPlaceholder;
      element.classList.remove('n8n-boy-border-color-var-error-500');
    }, 3000);
  },
};

// Validation Pipeline - extends FormValidator with API verification
class _ValidationPipeline {
  constructor() {
    this.validator = new FormValidator();
    this.setupValidationRules();
  }

  setupValidationRules() {
    this.validator.addRule('apiKey', validationUtils.isValidApiKey, 'Invalid OpenRouter API key format');
  }

  validate(formData) {
    return this.validator.validate(formData);
  }

  async verifyApiKey(apiKey) {
    return await validationUtils.verifyApiKey(apiKey);
  }

  showValidationFeedback(element, isValid) {
    validationUtils.showValidationFeedback(element, isValid);
  }

  showTemporaryError(element, message) {
    validationUtils.showTemporaryError(element, message);
  }
}

// Brand Animation Helper - handles branding animations and UI effects
class _BrandAnimationHelper {
  constructor(elements) {
    this.elements = elements;
    this.isPasswordVisible = false;
  }

  initializeAnimations() {
    // Staggered entrance animations
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
      animations.fadeInUp(card, index * 100);
    });
  }

  updateFloatingLabel() {
    const hasValue = this.elements.apiKeyInput.value.length > 0;
    const isFocused = document.activeElement === this.elements.apiKeyInput;

    if (hasValue) {
      this.elements.floatingLabel.classList.add('active');
      this.elements.floatingLabel.classList.add('n8n-boy-display-block');
      this.elements.apiKeyInput.placeholder = '';
    } else if (isFocused) {
      this.elements.floatingLabel.classList.remove('active');
      this.elements.floatingLabel.classList.add('n8n-boy-display-none');
      this.elements.apiKeyInput.placeholder = '';
    } else {
      this.elements.floatingLabel.classList.remove('active');
      this.elements.floatingLabel.classList.add('n8n-boy-display-block');
      this.elements.apiKeyInput.placeholder = `${LLM_CONFIG.keyPrefix}...`;
    }
  }

  handleCardFocus(card, isFocused) {
    if (isFocused) {
      document.querySelectorAll('.card').forEach(c => c.classList.remove('focused'));
      card.classList.add('focused');
    } else {
      card.classList.remove('focused');
    }
  }

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;

    if (this.isPasswordVisible) {
      this.elements.apiKeyInput.type = 'text';
      this.setSVGIcon(this.elements.toggleVisibility, 'eye-off');
    } else {
      this.elements.apiKeyInput.type = 'password';
      this.setSVGIcon(this.elements.toggleVisibility, 'eye');
    }
  }

  setSVGIcon(element, iconType) {
    this.clearElement(element);
    const svg = this.createBaseSVG();
    const iconElements = this.createIconElements(iconType);

    iconElements.forEach(iconElement => {
      svg.appendChild(iconElement);
    });

    element.appendChild(svg);
  }

  clearElement(element) {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }

  createBaseSVG() {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const attributes = {
      width: '16',
      height: '16',
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      'stroke-width': '2',
    };

    Object.entries(attributes).forEach(([key, value]) => {
      svg.setAttribute(key, value);
    });

    return svg;
  }

  createIconElements(iconType) {
    const iconConfigs = {
      'eye-off': [
        {
          type: 'path',
          attributes: {
            d: 'M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24',
          },
        },
        {
          type: 'line',
          attributes: {
            x1: '1',
            y1: '1',
            x2: '23',
            y2: '23',
          },
        },
      ],
      eye: [
        {
          type: 'path',
          attributes: {
            d: 'M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z',
          },
        },
        {
          type: 'circle',
          attributes: {
            cx: '12',
            cy: '12',
            r: '3',
          },
        },
      ],
    };

    const config = iconConfigs[iconType] || iconConfigs.eye;
    return config.map(({ type, attributes }) => {
      const element = document.createElementNS('http://www.w3.org/2000/svg', type);
      Object.entries(attributes).forEach(([key, value]) => {
        element.setAttribute(key, value);
      });
      return element;
    });
  }

  showCustomCursor() {
    const inputWrapper = this.elements.apiKeyInput.closest('.input-wrapper');
    if (inputWrapper) {
      inputWrapper.classList.add('focused');
      this.updateCustomCursor();
    }
  }

  hideCustomCursor() {
    const inputWrapper = this.elements.apiKeyInput.closest('.input-wrapper');
    if (inputWrapper) {
      inputWrapper.classList.remove('focused');
    }
  }

  updateCustomCursor() {
    const inputWrapper = this.elements.apiKeyInput.closest('.input-wrapper');
    if (!inputWrapper || !inputWrapper.classList.contains('focused')) {
      return;
    }

    const tempSpan = document.createElement('span');
    tempSpan.style.visibility = 'hidden';
    tempSpan.style.position = 'absolute';
    tempSpan.style.whiteSpace = 'pre';
    tempSpan.style.font = window.getComputedStyle(this.elements.apiKeyInput).font;
    tempSpan.textContent = this.elements.apiKeyInput.value;
    document.body.appendChild(tempSpan);

    const textWidth = tempSpan.offsetWidth;
    document.body.removeChild(tempSpan);

    const inputStyle = window.getComputedStyle(this.elements.apiKeyInput);
    const paddingLeft = parseInt(inputStyle.paddingLeft);
    const cursorLeft = paddingLeft + textWidth;
    const cursorTop = parseInt(inputStyle.paddingTop) + 2;

    inputWrapper.style.setProperty('--cursor-left', `${cursorLeft}px`);
    inputWrapper.style.setProperty('--cursor-top', `${cursorTop}px`);
  }
}

// DOM Element Factory
class ElementFactory {
  static createModelOption(key, model) {
    const option = document.createElement('option');
    option.value = key;
    option.textContent = model.name;
    return option;
  }

  static findElements() {
    return {
      modelSelect: document.getElementById('model-select'),
      apiKeyInput: document.getElementById('api-key'),
      apiKeyLabel: document.getElementById('api-key-label'),
      floatingLabel: document.querySelector('.floating-label'),
      saveButton: document.getElementById('save-key'),
      toggleVisibility: document.getElementById('toggle-visibility'),
      connectionStatusBadge: document.getElementById('connection-status-badge'),
      themeOptions: document.querySelectorAll('input[name="connectionTheme"]'),
      uiThemeOptions: document.querySelectorAll('input[name="fabChatTheme"]'),
    };
  }

  static validateElements(elements) {
    Object.entries(elements).forEach(([key, element]) => {
      if (!element || (element.length !== undefined && element.length === 0)) {
        console.warn(`UI element not found: ${key}`);
      }
    });
  }
}

// Event Handler Coordinator
class EventHandlerCoordinator {
  constructor(app) {
    this.app = app;
  }

  setupAll() {
    const setupMethods = [
      () => this.setupModelSelectListeners(),
      () => this.setupApiKeyInputListeners(),
      () => this.setupUIInteractionListeners(),
      () => this.setupThemeListeners(),
    ];

    setupMethods.forEach(method => {
      try {
        method();
      } catch (error) {
        console.error('Error setting up event listeners:', error);
      }
    });
  }

  setupModelSelectListeners() {
    const modelSelect = this.app.elements.modelSelect;
    const apiSection = document.querySelector('.api-section');

    const listeners = [
      {
        event: 'change',
        handler: (e) => this.app.handleModelChange(e.target.value),
      },
      {
        event: 'focus',
        handler: () => this.app.animationHelper.handleCardFocus(apiSection, true),
      },
      {
        event: 'blur',
        handler: () => this.app.animationHelper.handleCardFocus(apiSection, false),
      },
    ];

    this.attachListeners(modelSelect, listeners);
  }

  setupApiKeyInputListeners() {
    const apiKeyInput = this.app.elements.apiKeyInput;
    const toggleVisibility = this.app.elements.toggleVisibility;

    const apiKeyListeners = [
      {
        event: 'input',
        handler: (e) => this.handleApiKeyInput(e),
      },
      {
        event: 'focus',
        handler: () => this.app.handleApiKeyFocus(),
      },
      {
        event: 'blur',
        handler: () => this.app.handleApiKeyBlur(),
      },
      {
        event: 'click',
        handler: () => setTimeout(() => this.app.animationHelper.updateCustomCursor(), 10),
      },
      {
        event: 'keyup',
        handler: () => this.app.animationHelper.updateCustomCursor(),
      },
    ];

    this.attachListeners(apiKeyInput, apiKeyListeners);

    toggleVisibility.addEventListener('click', () => {
      this.app.animationHelper.togglePasswordVisibility();
    });
  }

  setupUIInteractionListeners() {
    this.setupSaveButtonListener();
    this.setupRippleEffects();
    this.setupCardHoverEffects();
  }

  setupCardHoverEffects() {
    document.querySelectorAll('.card').forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.classList.add('n8n-boy-transform-translatey-2px');
      });

      card.addEventListener('mouseleave', () => {
        card.classList.add('n8n-boy-transform-translatey-0');
      });
    });
  }

  setupThemeListeners() {
    this.setupThemeOptionListeners(this.app.elements.themeOptions, 'handleThemeChange');
    this.setupThemeOptionListeners(this.app.elements.uiThemeOptions, 'handleUIThemeChange');
  }

  // Helper method to attach multiple listeners to an element
  attachListeners(element, listeners) {
    listeners.forEach(({ event, handler }) => {
      element.addEventListener(event, handler);
    });
  }

  // Helper method for API key input handling
  handleApiKeyInput(e) {
    this.app.handleInputChange(e);
    this.app.animationHelper.updateFloatingLabel();
    this.app.animationHelper.updateCustomCursor();
  }

  // Helper method for save button setup
  setupSaveButtonListener() {
    if (this.app.elements.saveButton) {
      this.app.elements.saveButton.addEventListener('click', (e) => {
        e.preventDefault();
        animations.createRipple(this.app.elements.saveButton, e);
        this.app.handleSave();
      });
    } else {
      console.error('Save button not found!');
    }
  }

  // Helper method for ripple effects
  setupRippleEffects() {
    document.querySelectorAll('.btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        if (!btn.disabled) {
          animations.createRipple(btn, e);
        }
      });
    });
  }

  // Helper method for theme option listeners
  setupThemeOptionListeners(options, handlerMethod) {
    options.forEach(option => {
      option.addEventListener('change', (e) => {
        if (e.target.checked) {
          this.app.themeManager[handlerMethod](e.target.value);
        }
      });
    });
  }
}

// Main application class
class PopupApp {
  constructor() {
    this.currentModel = 'anthropic/claude-sonnet-4';
    this.initialize();
  }

  initialize() {
    const initializationSteps = [
      () => this.initializeElements(),
      () => this.initializeManagers(),
      () => this.populateModelSelect(),
      () => this.setupEventListeners(),
      () => this.loadSettings(),
      () => this.animationHelper.initializeAnimations(),
    ];

    initializationSteps.forEach((step, index) => {
      try {
        step();
      } catch (error) {
        console.error(`Error in initialization step ${index + 1}:`, error);
      }
    });
  }

  initializeManagers() {
    this.storageManager = new _StorageManager();
    this.themeManager = new _ThemeManager(this.storageManager);
    this.validationPipeline = new _ValidationPipeline();
    this.animationHelper = new _BrandAnimationHelper(this.elements);
    this.eventCoordinator = new EventHandlerCoordinator(this);
  }

  initializeElements() {
    this.elements = ElementFactory.findElements();
    ElementFactory.validateElements(this.elements);
  }

  populateModelSelect() {
    this.elements.modelSelect.innerHTML = '';
    Object.entries(LLM_CONFIG.models).forEach(([key, model]) => {
      const option = ElementFactory.createModelOption(key, model);
      this.elements.modelSelect.appendChild(option);
    });
  }


  setupEventListeners() {
    this.eventCoordinator.setupAll();
  }

  handleApiKeyFocus() {
    this.animationHelper.updateFloatingLabel();
    const apiSection = document.querySelector('.api-section');
    this.animationHelper.handleCardFocus(apiSection, true);
    this.animationHelper.showCustomCursor();
  }

  handleApiKeyBlur() {
    this.animationHelper.updateFloatingLabel();
    const apiSection = document.querySelector('.api-section');
    this.animationHelper.handleCardFocus(apiSection, false);
    this.animationHelper.hideCustomCursor();
  }


  handleModelChange(model, shouldSave = true) {
    this.currentModel = model;
    this.updateModelUI(model);
    this.loadApiKey();

    // Save the model selection only if explicitly requested (not during initial load)
    if (shouldSave) {
      this.saveModelSelection(model);
    }
  }

  updateModelUI(_model) {
    // Update section title and label
    this.elements.apiKeyLabel.textContent = 'OpenRouter API Key';
    this.elements.floatingLabel.textContent = 'Enter your OpenRouter API key';

    // Update placeholder
    this.elements.apiKeyInput.placeholder = `${LLM_CONFIG.keyPrefix}...`;

    // Update floating label
    this.animationHelper.updateFloatingLabel();
  }

  updateConnectionStatusBadge(isConnected, customText = null) {
    if (this.elements.connectionStatusBadge) {
      if (customText) {
        this.elements.connectionStatusBadge.textContent = customText;
        this.elements.connectionStatusBadge.className = 'status-badge checking';
      } else if (isConnected) {
        this.elements.connectionStatusBadge.textContent = 'Connected';
        this.elements.connectionStatusBadge.className = 'status-badge connected';
      } else {
        this.elements.connectionStatusBadge.textContent = 'Not Connected';
        this.elements.connectionStatusBadge.className = 'status-badge disconnected';
      }
    }
  }


  async loadApiKey() {
    const apiKey = await this.storageManager.loadApiKey();
    this.elements.apiKeyInput.value = '';

    if (!apiKey) {
      this.updateConnectionStatusBadge(false);
      this.animationHelper.updateFloatingLabel();
      return;
    }

    await this.processLoadedApiKey(apiKey);
    this.animationHelper.updateFloatingLabel();
  }

  async processLoadedApiKey(apiKey) {
    const validation = this.validationPipeline.validate({ apiKey });

    if (!validation.isValid) {
      this.updateConnectionStatusBadge(false);
      return;
    }

    this.showMaskedApiKey(apiKey);
    this.updateConnectionStatusBadge(true, 'Checking...');
    await this.verifyAndUpdateStatus(apiKey);
  }

  showMaskedApiKey(apiKey) {
    const maskedKey = apiKey.substring(0, 12) + '•'.repeat(8) + apiKey.slice(-4);
    this.elements.apiKeyInput.placeholder = maskedKey;
  }

  async verifyAndUpdateStatus(apiKey) {
    try {
      const isValid = await this.validationPipeline.verifyApiKey(apiKey);
      this.updateConnectionStatusBadge(isValid);
    } catch {
      this.updateConnectionStatusBadge(false);
    }
  }

  handleInputChange(e) {
    // Real-time validation feedback
    const value = e.target.value;
    if (value.length > 0) {
      const validation = this.validationPipeline.validate({ apiKey: value });
      this.validationPipeline.showValidationFeedback(e.target, validation.isValid);
    } else {
      this.validationPipeline.showValidationFeedback(e.target, null);
    }
  }

  async handleSave() {
    const apiKey = this.elements.apiKeyInput.value.trim();

    this.startSaveProcess();

    try {
      await this.processSaveApiKey(apiKey);
    } catch (error) {
      this.handleSaveError(error);
    } finally {
      this.endSaveProcess();
    }
  }

  async processSaveApiKey(apiKey) {
    if (!this.validateApiKeyInput(apiKey)) {
      return;
    }

    this.updateConnectionStatusBadge(true, 'Verifying...');

    if (!await this.validationPipeline.verifyApiKey(apiKey)) {
      this.handleInvalidApiKey();
      return;
    }

    await this.storageManager.saveApiKey(apiKey, this.currentModel);
    this.handleSuccessfulSave();
  }

  validateApiKeyInput(apiKey) {
    const validation = this.validationPipeline.validate({ apiKey });
    if (!validation.isValid) {
      animations.shake(this.elements.apiKeyInput);
      animations.setLoading(this.elements.saveButton, false);
      return false;
    }
    return true;
  }

  handleInvalidApiKey() {
    animations.shake(this.elements.apiKeyInput);
    this.updateConnectionStatusBadge(false);
    this.validationPipeline.showTemporaryError(this.elements.apiKeyInput, 'Invalid API key - please check and try again');
    animations.setLoading(this.elements.saveButton, false);
  }


  handleSuccessfulSave() {
    this.elements.apiKeyInput.value = '';
    this.loadApiKey();
    this.animationHelper.updateFloatingLabel();
    this.storageManager.refreshBackgroundCache();
    this.storageManager.notifyModelIndicatorUpdate();
  }

  // Save process helper methods
  startSaveProcess() {
    animations.setLoading(this.elements.saveButton, true);
  }

  endSaveProcess() {
    animations.setLoading(this.elements.saveButton, false);
  }

  handleSaveError(error) {
    console.error('Error saving API key:', error);
    this.updateConnectionStatusBadge(false);
  }

  async loadSettings() {
    const settings = await this.storageManager.loadSettings();

    const settingsOperations = [
      () => this.loadModelSettings(settings),
      () => this.loadThemeSettings(settings),
    ];

    settingsOperations.forEach(operation => {
      try {
        operation();
      } catch (error) {
        console.error('Error loading settings:', error);
      }
    });
  }

  loadModelSettings(settings) {
    const modelKey = this.findModelKey(settings.selectedModel);
    this.elements.modelSelect.value = modelKey;
    this.handleModelChange(modelKey, false);
  }

  findModelKey(selectedModelId) {
    return Object.keys(LLM_CONFIG.models).find(key =>
      LLM_CONFIG.models[key].id === selectedModelId,
    ) || LLM_CONFIG.defaultModel;
  }

  loadThemeSettings(settings) {
    this.themeManager.applyThemeSettings(
      settings,
      this.elements.themeOptions,
      this.elements.uiThemeOptions,
    );
  }

  /**
   * Save model selection immediately when changed
   */
  async saveModelSelection(model) {
    const success = await this.storageManager.saveModelSelection(model);
    if (success) {
      this.storageManager.notifyModelIndicatorUpdate();
    }
  }





}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize brand protection first
  BRAND_PROTECTION.init();

  // Add a small delay to ensure all elements are rendered
  setTimeout(() => {
    try {
      new PopupApp();
    } catch (error) {
      console.error('Error initializing PopupApp:', error);
    }
  }, 100);
});

// Add keyboard shortcuts
document.addEventListener('keydown', (e) => {
  // Ctrl/Cmd + Enter to save
  if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
    e.preventDefault();
    const saveButton = document.getElementById('save-key');
    if (saveButton && !saveButton.disabled) {
      saveButton.click();
    }
  }
});

// Handle window focus/blur for subtle animations
window.addEventListener('focus', () => {
  document.body.classList.add('n8n-boy-filter-none');
});

window.addEventListener('blur', () => {
  document.body.classList.add('n8n-boy-filter-brightness-0-98');
});


  // Initialize the application when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      // Initialize brand protection
      BRAND_PROTECTION.init();

      // Initialize popup app
      new PopupApp();
    });
  } else {
    // DOM is already ready
    BRAND_PROTECTION.init();
    new PopupApp();
  }
})();
// End of IIFE wrapper