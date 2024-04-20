<template>
    <v-app>
      <v-container class="mt-15">
        <v-card>
          <v-card-title>
            Column Chart
          </v-card-title>
          <v-card-text>
            <v-chart :options="chartOptions" :series="chartSeries" type="bar"></v-chart>
          </v-card-text>
        </v-card>
      </v-container>
    </v-app>
  </template>
  
  <script>
  export default {
    data() {
      return {
        chartOptions: {
          chart: {
            id: 'column-chart'
          },
          xaxis: {
            categories: ['Category A', 'Category B', 'Category C', 'Category D']
          }
        },
        chartSeries: [
          {
            name: 'Data 1',
            data: [30, 40, 35, 50]
          },
          {
            name: 'Data 2',
            data: [20, 35, 45, 55]
          }
        ]
      };
    }
  };
  </script>
  
  <style>
  /* Add your styles here */
  </style>
  