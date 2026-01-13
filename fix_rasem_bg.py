from PIL import Image
import numpy as np

# Load Rasem's image
img = Image.open('/Users/Teamaa/Desktop/255-new/public/Staff/rasem.webp')
img = img.convert('RGB')
data = np.array(img)

# Get RGB channels
r, g, b = data[:,:,0], data[:,:,1], data[:,:,2]

# Very aggressive mask - anything that's not clearly dark/colored should be white
# This will catch all the gray background
mask = (r > 140) & (g > 140) & (b > 140)

# Replace with pure white (255, 255, 255)
data[mask, 0] = 255  # Red channel
data[mask, 1] = 255  # Green channel
data[mask, 2] = 255  # Blue channel

# Convert back to image
result = Image.fromarray(data, 'RGB')

# Save as webp with high quality
result.save('/Users/Teamaa/Desktop/255-new/public/Staff/rasem.webp', 'WEBP', quality=95)
print("Rasem's photo background converted to pure white successfully!")
