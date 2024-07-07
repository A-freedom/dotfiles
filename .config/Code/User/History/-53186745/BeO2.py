#%%
from c.pipeline import Pipeline
from neuraxle.steps.sklearn import TransformerWrapper
from neuraxle.steps.numpy import NumpyTranspose
from neuraxle.steps.neural_network import NeuralNetwork
from neuraxle.steps.output_handlers import RegressionOutputTransformer
from neuraxle.steps.loop import ForEachDataInput
from neuraxle.hyperparams.distributions import LogUniform, Choice
from neuraxle.hyperparams.space import HyperparameterSpace
from neuraxle.metaopt.auto_ml import RandomSearch
from neuraxle.metaopt.callbacks import ScoringCallback
from neuraxle.metaopt.callbacks import MetricCallback
from neuraxle.metaopt.callbacks import DataShufflerCallback
from neuraxle.union import AddFeatures


# Define the neural network architecture
def create_model(hyperparams):
    return Pipeline([
        ForEachDataInput(NeuralNetwork(**hyperparams))
    ])


# Define the hyperparameter space for the neural network
hyperparams_space = HyperparameterSpace({
    'n_layers': Choice([1, 2, 3]),
    'hidden_layer_size': Choice([32, 64, 128]),
    'learning_rate': LogUniform(1e-4, 1e-2)
})

# Create the Neural Random Forest pipeline
neural_random_forest = Pipeline([
    AddFeatures([
        TransformerWrapper(NumpyTranspose(), fit_transforms=False),
        TransformerWrapper(RegressionOutputTransformer(), fit_transforms=False)
    ]),
    RandomSearch(create_model, hyperparams_space, n_iter=10, higher_score_is_better=True, refit=True, cache_folder_when_no_handle='cache'),
    RegressionOutputTransformer(),
])


# Train the Neural Random Forest
neural_random_forest = neural_random_forest.fit(X_train, y_train)

# Make predictions
y_pred = neural_random_forest.predict(X_test)

# Evaluate the model
mse = mean_squared_error(y_test, y_pred)
print("Mean Squared Error (MSE):", mse)
