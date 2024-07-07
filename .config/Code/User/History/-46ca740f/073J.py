#%%
from my_data import get_data_fram
import numpy as np
df = get_data_fram(denormliztion_data=True)
import seaborn as sns
import matplotlib.pyplot as plt
# %%
dete_describe = df.describe()
#save file
dete_describe.to_csv('DATA/statics_analysis/describe.csv')

# %%
# Calculate correlation matrix
corr_matrix = df.corr()

# Replace lower triangle values (including diagonal) with NaN
corr_matrix = corr_matrix.where(np.triu(np.ones(corr_matrix.shape), k=1).astype(bool))

# Drop rows and columns with NaN values
corr_matrix = corr_matrix.dropna(axis=0, how='all').dropna(axis=1, how='all')

#save file
# corr_matrix.to_csv('DATA/statics_analysis/corr_matrix.csv')

plt.figure(figsize=(8, 6))
sns.heatmap(corr_matrix, annot=True, cmap='coolwarm', fmt=".2f", linewidths=0.5)
plt.title('Correlation Heatmap')
plt.show()
# %%