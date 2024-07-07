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

# Repeat the original DataFrame for the number of combinations
df_repeated = pd.concat([df] * len(combinations), ignore_index=True)

# Add the fy and fc combinations to the repeated DataFrame
df_repeated['fy (MPa)'] = [combo[0] for combo in combinations for _ in range(len(df))]
df_repeated['fc (MPa)'] = [combo[1] for combo in combinations for _ in range(len(df))]

print(df_repeated)

# %%
