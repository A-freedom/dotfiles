#%%
import pandas as pd
from itertools import product

# Read the original DataFrame
df = pd.read_csv('DATA/AISC-R_HSS.csv')

# Define possible values for fy and fc
fy_values = [200, 300, 400, 500, 600]
fc_values = [35, 45, 55, 65, 75]

# Create all combinations of fy and fc values
combinations = list(product(fy_values, fc_values))

# Create a DataFrame to store all combinations
combo_df = pd.DataFrame(combinations, columns=['fy (MPa)', 'fc (MPa)'])

# Duplicate original DataFrame for each combination
df_repeated = pd.concat([df]*len(fy_values)*len(fc_values), ignore_index=True)

# Repeat combinations to match the length of the repeated original DataFrame
combo_df_repeated = pd.concat([combo_df]*len(df), ignore_index=True)

# Concatenate combo_df_repeated with df_repeated horizontally
result_df = pd.concat([df_repeated, combo_df_repeated], axis=1)

print(result_df)

# %%
