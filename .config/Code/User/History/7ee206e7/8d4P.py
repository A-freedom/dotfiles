#%%
from my_data import *
import tensorflow as tf
from sklearn.preprocessing import MinMaxScaler
from sklearn.metrics import mean_squared_error
import numpy as np

def calculate_mse_with_MinMaxScaler(y_test,y_predications,):
    scaler = MinMaxScaler()
    normailzed_y_test = np.ravel(scaler.fit_transform(np.ravel(y_test).reshape(-1, 1)))
    normailzed_y_predications = np.ravel(scaler.fit_transform(np.ravel(y_predications).reshape(-1, 1)))

    mse = mean_squared_error(normailzed_y_test, normailzed_y_predications)
    print("Mean Squared Error:", mse)