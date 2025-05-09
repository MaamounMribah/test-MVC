# Use the official Microsoft Windows Server Core with ASP.NET 4.8
FROM mcr.microsoft.com/dotnet/framework/aspnet:4.8-windowsservercore-ltsc2019

# Set the working directory to IIS root
WORKDIR /inetpub/wwwroot

# Copy the published output to the container
COPY . ./

# Expose HTTP port
EXPOSE 80
