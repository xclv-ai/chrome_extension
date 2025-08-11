/**
 * Centralized LLM Configuration for n8n boy extension
 *
 * This module contains OpenRouter configuration and settings
 * for unified access to multiple LLM models.
 */

//=============================================================================
// TYPE DEFINITIONS
//=============================================================================

/**
 * OpenRouter model configuration interface
 */
window.LLM_CONFIG= {
  // OpenRouter API configuration
  apiEndpoint: 'https://openrouter.ai/api/v1/chat/completions',
  keyPrefix: 'sk-or-v1-',
  keyMinLength: 30,
  defaultModel: 'anthropic/claude-sonnet-4',

  // Available models
  models: {
    'anthropic/claude-sonnet-4': {
      id: 'anthropic/claude-sonnet-4',
      name: 'Claude Sonnet 4 (🚀 Awesome)',
      provider: 'Anthropic',
      description: 'Most capable model for complex reasoning and analysis',
      contextLength: 1000000,
      supportsImages: true,
      supportsTools: true
    },
    'moonshotai/kimi-k2': {
      id: 'moonshotai/kimi-k2',
      name: 'Kimi K2 (⚡ Super good)',
      provider: 'Moonshot AI',
      description: 'High-performance Chinese-English bilingual model',
      contextLength: 128000,
      supportsImages: true,
      supportsTools: true
    },
    'openai/gpt-4.1': {
      id: 'openai/gpt-4.1',
      name: 'OpenAI GPT-4.1 (🔥 Pretty good)',
      provider: 'OpenAI',
      description: 'Latest GPT-4 model with enhanced capabilities',
      contextLength: 128000,
      supportsImages: true,
      supportsTools: true
    },
    'deepseek/deepseek-chat-v3-0324': {
      id: 'deepseek/deepseek-chat-v3-0324',
      name: 'DeepSeek Chat V3 (🔥 Pretty good)',
      provider: 'DeepSeek',
      description: 'Advanced conversational model with strong performance',
      contextLength: 128000,
      supportsImages: true,
      supportsTools: true
    },
    'google/gemini-2.5-pro-preview': {
      id: 'google/gemini-2.5-pro-preview',
      name: 'Gemini 2.5 Pro (🐌 Good but slow)',
      provider: 'Google',
      description: 'Advanced multimodal model with strong reasoning',
      contextLength: 1000000,
      supportsImages: true,
      supportsTools: true
    },
    'x-ai/grok-4': {
      id: 'x-ai/grok-4',
      name: 'Grok 4 (🐌 Good but slow)',
      provider: 'xAI',
      description: 'Advanced reasoning model with real-time knowledge',
      contextLength: 128000,
      supportsImages: true,
      supportsTools: true
    },
    'mistralai/mistral-large-2407': {
      id: 'mistralai/mistral-large-2407',
      name: 'Mistral Large (⚡ Decent but fast)',
      provider: 'Mistral',
      description: 'High-performance model for complex reasoning tasks',
      contextLength: 128000,
      supportsImages: true,
      supportsTools: true
    },
  },

  // Temperature settings for different tasks
  temperatures: {
    codeGeneration: 0.2,
    promptOptimization: 0.3,
    promptGeneration: 0.7,
    jsonGeneration: 0.5,
    jsonFixing: 0.3,  // Lower temperature for more deterministic JSON fixing
    n8nHelper: 0.4,
    agentRouting: 0.1,  // Very low for consistent routing
    workflowAgent: 0.4,
    troubleshootingAgent: 0.3,  // Lower for more precise debugging
    integrationAgent: 0.4,
    generalAgent: 0.5,

    default: 0.7
  },

  // Token limits
  maxTokens: 3000,

  // Optional headers for OpenRouter
  optionalHeaders: {
    httpReferer: undefined, // Can be set to site URL for rankings
    xTitle: 'n8n Boy Extension', // Site title for rankings
  },
};

//=============================================================================
// INTERNAL MODELS (NOT USER-SELECTABLE)
//=============================================================================

/**
 * Internal models used by the system (e.g., orchestrator routing)
 * These models are not available for user selection
 */
const INTERNAL_MODELS = {
  'openai/gpt-4.1-mini': {
    id: 'openai/gpt-4.1-mini',
    name: 'OpenAI GPT-4.1 Mini',
    provider: 'OpenAI',
    description: 'Fast and efficient model optimized for routing and classification',
    contextLength: 128000,
    supportsImages: true,
    supportsTools: true
  },
};

//=============================================================================
// UTILITY FUNCTIONS
//=============================================================================

/**
 * Get model configuration by name
 */
window.getModelConfig = function(modelName){
  return LLM_CONFIG.models[modelName] || null;
}

/**
 * Get model configuration by ID
 */
window.getModelConfigById = function(modelId){
  return Object.values(LLM_CONFIG.models).find(model => model.id === modelId) || null;
}

/**
 * Get temperature for a specific task
 */
window.getTemperature = function(taskType){
  return LLM_CONFIG.temperatures[taskType] || LLM_CONFIG.temperatures.default;
}

/**
 * Validate OpenRouter API key format
 */
window.validateApiKey = function(apiKey){
  return !!(apiKey &&
         apiKey.startsWith(LLM_CONFIG.keyPrefix) &&
         apiKey.length >= LLM_CONFIG.keyMinLength);
}

/**
 * Get all available model names
 */
window.getModelNames = function(){
  return Object.keys(LLM_CONFIG.models);
}

/**
 * Get all available model IDs
 */
window.getModelIds = function(){
  return Object.values(LLM_CONFIG.models).map(model => model.id);
}

/**
 * Get default model configuration
 */
window.getDefaultModel = function() {\n  const defaultModelName = Object.keys(LLM_CONFIG.models).find(
    name => LLM_CONFIG.models[name].id === LLM_CONFIG.defaultModel,
  );
  return LLM_CONFIG.models[defaultModelName || 'anthropic/claude-sonnet-4'];
}

/**
 * Get internal model configuration (for system use only)
 */
window.getInternalModelConfig = function(modelId){
  return INTERNAL_MODELS[modelId] || INTERNAL_MODELS[modelId] || null;
}

// Export main configuration object for direct access
// LLM_CONFIG available as window.LLM_CONFIG
