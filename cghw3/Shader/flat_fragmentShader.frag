#version 330

// Default color buffer location is 0
// If you create framebuffer your own, you need to take care of it
layout(location=0) out vec4 color;

flat in vec4 Color;

void main()
{	
	color = Color;
}
