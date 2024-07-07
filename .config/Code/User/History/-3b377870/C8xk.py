# %%
import os
os.environ["TF_CPP_MIN_LOG_LEVEL"] = "2"
import pandas as pd
import numpy as np
import tensorflow as tf
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
import math
from tensorflow.keras.callbacks import EarlyStopping

# %%
# Load the dataset
df = pd.read_csv('database.csv', header=0)

# %%
df

# %%
X = df[['shap','h','t','l','fy','fc','et','eb','A']]
y = df['n']
# %%
scaler = StandardScaler()


# %%
X = scaler.fit_transform(X)


X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.05)

# %%
len(X_test)

# %%
model = tf.keras.Sequential([
    # tf.keras.layers.Dense(9,activation='elu',input_shape=(9,)),
    
    tf.keras.layers.Dense(20,activation='relu'),
    tf.keras.layers.Dense(20,activation='tanh'),
    tf.keras.layers.Dense(20,activation='relu'),
    tf.keras.layers.Dense(1)  # Output layer for regression
])

# %%

custom_optimizer = tf.keras.optimizers.Adam(learning_rate=0.001)
model.compile(optimizer=custom_optimizer, loss='mean_absolute_percentage_error', metrics=["mae"])


# %%
early_stopping = EarlyStopping(monitor='val_loss', patience=50, restore_best_weights=True)
model.fit(X_train, y_train, epochs=3000, batch_size=1000, verbose=2, validation_split=0.1, callbacks=[early_stopping])

# %%

loss, mae = model.evaluate(X_train, y_train)
print("train",loss, mae)
loss, mae = model.evaluate(X_test, y_test)
print("test",loss, mae)

# print(loss,mae)
model.save('my_model')

# %%

y_pre = model.predict(X_test)
y_pre = [i[0] for i in y_pre]
error = (y_test - y_pre) / y_test *100
# error = error.abs().sort_values()
error = error.sort_values()
error.to_csv('error.csv', index=False)