import replicate
import os
import yaml

config = yaml.safe_load(open("config.yml"))
api_key = config['api_key']

r = replicate.Client(api_token='50dfb470fa17bb954500f66cf21b9d9d2a779b01')
model = r.models.get("stability-ai/stable-diffusion")

prompt = "A mystery man flying in a car"
output = model.predict(prompt=prompt)

# Display image
# Send via email to guys
