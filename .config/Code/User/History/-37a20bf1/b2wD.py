#%%
import pickle
import tensorflow as tf
import pandas as pd
from itertools import product

# Read the original DataFrame
df = pd.read_csv('DATA/AISC-R_HSS.csv')

df = df[(df['b (mm)'] >= 40) & (df['b (mm)'] <= 360)]
df = df[(df['h (mm)'] >= 40) & (df['h (mm)'] <= 360)]
df = df[(df['t (mm)'] >= 0.7) & (df['t (mm)'] <= 15)]

# Define possible values for fy and fc
fy_values = [200, 300, 400, 500, 600]
fc_values = [35, 45, 55, 65, 75]
l_values = [2500, 2750, 3000, 3250, 3500, 3750, 4000, 4250, 4500]

# Create all combinations of fy, fc, and L values
combinations = list(product(fy_values, fc_values, l_values))

# Repeat the original DataFrame for the number of combinations
df_repeated = pd.concat([df] * len(combinations), ignore_index=True)

# Add the fy, fc, and L combinations to the repeated DataFrame
df_repeated['fy (MPa)'] = [combo[0] for combo in combinations for _ in range(len(df))]
df_repeated['fc (MPa)'] = [combo[1] for combo in combinations for _ in range(len(df))]
df_repeated['L (mm)'] = [combo[2] for combo in combinations for _ in range(len(df))]

# loaded_model = tf.keras.models.load_model('model_work/R_CFST_NM/my_model/best_model.h5')
# with open('model_work/R_CFST_NM/my_model/data_scaler.pkl', 'rb') as f:
#     scaler = pickle.load(f)
#
# def predict_ann(df):
#     scaled_df = scaler.transform(df)
#     return loaded_model.predict(scaled_df[:, :-1])[0][0] * 0.75
#
# df_to_predict = df_repeated[['b (mm)', 'h (mm)', 't (mm)', 'L (mm)', 'fy (MPa)', 'fc (MPa)']]
# df_to_predict['N Test (kN)'] = 0
# df_repeated['N Test (kN)'] = predict_ann(df_to_predict)
print(df_repeated)

# %%
